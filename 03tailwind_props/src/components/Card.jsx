import React from "react";

function Card({companyName,about}) {
  return (
    <div>
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://images.pexels.com/photos/32845631/pexels-photo-32845631.jpeg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              {companyName}
            </div>
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
            >
              {about}
            </a>
            <p className="mt-2 text-gray-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
