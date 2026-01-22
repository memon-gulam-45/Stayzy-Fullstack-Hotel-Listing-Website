const Listing = require("../models/listing");
const fetch = require("node-fetch");
require("dotenv").config();

async function forwardGeocode(query) {
  const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.LIQ_KEY}&q=${query}&format=json&limit=1`;
  const res = await fetch(url);
  const data = await res.json();

  // console.log("Raw data:", data);

  if (!Array.isArray(data) || data.length === 0) {
    // console.log("No valid data returned");
    return { coordinates: [0, 0] };
  }

  return {
    coordinates: [data[0].lon, data[0].lat],
  };
}

module.exports.searchListing = async (req, res, next) => {
  const { search } = req.query;
  // console.log(search);
  if (search) {
    let filter = {};

    if (search && search.trim() !== "") {
      filter.location = {
        $regex: search,
        $options: "i", // case-insensitive
      };
    }

    const allListings = await Listing.find(filter);
    // console.log(allListings);

    if (allListings.length > 0) {
      res.render("listings/index", { allListings });
    } else {
      req.flash("error", "No listings found.");
      res.redirect("/listings");
    }
  } else {
    return next();
  }
};

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  const geoData = await forwardGeocode(req.body.listing.location);
  const coordinates = geoData.coordinates;
  // console.log(coordinates);

  let url = req.file.url;
  let filename = req.file.display_name;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = {
    type: "Point",
    coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
  };

  let savedListing = await newListing.save();
  // console.log(savedListing);

  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.url;
    let filename = req.file.display_name;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  // console.log(deletedListing);

  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
