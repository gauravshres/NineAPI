const { filter } = require("../src/filter");

describe("returnFilterdContent", () => {
  it("should return required filterd content", () => {
    const res = filter([
      {
        country: "UK",
        drm: true,
        episodeCount: 3,
        image: {
          showImage:
            "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
        },
        slug: "show/16kidsandcounting",
        title: "16 Kids and Counting",
        tvChannel: "GEM",
      },
      {
        drm: false,
        episodeCount: 0,
        image: {
          showImage:
            "http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg",
        },
        slug: "show/thetaste",
        title: "The Taste",
        tvChannel: "GEM",
      },
    ]);
    expect(res).toEqual({
      response: [
        {
          image:
            "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
          slug: "show/16kidsandcounting",
          title: "16 Kids and Counting",
        },
      ],
    });
  });
});
