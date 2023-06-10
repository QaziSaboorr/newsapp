import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "pymnts.com",
      },
      author: "PYMNTS",
      title:
        "Tesla Gets $3 Billion Boost Thanks to Partnerships With GM and Ford",
      description:
        "Electric car giant Tesla has received a $3 billion boost thanks to deals inked with two of the biggest U.S. automakers, General Motors and Ford. General Motors and Ford have agreed to adopt Tesla’s North American Charging Standard (NACS) for their electric ve…",
      url: "https://www.pymnts.com/technology/2023/tesla-gets-3-billion-boost-thanks-to-partnerships-with-gm-and-ford/",
      urlToImage:
        "https://content.pymnts.com/wp-content/uploads/2023/06/Tesla-GM-Ford-1000x600.jpg",
      publishedAt: "2023-06-09T21:09:15Z",
      content:
        "Electric car giant Tesla has received a $3 billion boost thanks to deals inked with two of the biggest U.S. automakers, General Motors and Ford.\r\nGeneral Motors and Ford have agreed to adopt Teslas N… [+2360 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "thestreet.com",
      title:
        "Tesla Pulls Dramatic Turnaround as EV Maker Powers Back to Exclusive Ranking",
      description:
        "November wasn't very kind to Elon Musk. The Tesla (TSLA) - Get Free Report CEO had just completed his $44 billion acquisition of Twitter, an extremely public months-long saga of charges, countercharges and lots of bad karma. DON'T MISS: Elon Musk's Big New Te…",
      url: "https://biztoc.com/x/199baa05c606cc69",
      urlToImage: "https://c.biztoc.com/p/199baa05c606cc69/s.webp",
      publishedAt: "2023-06-09T21:06:07Z",
      content:
        "November wasn't very kind to Elon Musk.The Tesla (TSLA) - Get Free Report CEO had just completed his $44 billion acquisition of Twitter, an extremely public months-long saga of charges, countercharge… [+283 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "wsj.com",
      title: "S&P 500 Treks Higher as Investors Prep for Fed Decision",
      description:
        "Tesla shares rose after General Motors said that it would produce electric vehicles with Tesla charge ports starting from 2025. #tesla #generalmotors",
      url: "https://biztoc.com/x/4469e8bcbb406e9d",
      urlToImage: "https://c.biztoc.com/p/4469e8bcbb406e9d/s.webp",
      publishedAt: "2023-06-09T21:06:07Z",
      content:
        "Tesla shares rose after General Motors said that it would produce electric vehicles with Tesla charge ports starting from 2025.\r\n#tesla#generalmotors\r\nThis story appeared on wsj.com, .",
    },
    {
      source: {
        id: null,
        name: "N-tv.de",
      },
      author: "n-tv NACHRICHTEN",
      title: "Wall Street eher zurückhaltend: Tesla beflügelt Nasdaq 100",
      description:
        "Mit leichten Gewinnen rettet sich der US-Aktienmarkt zum Wochenausklang über die Ziellinie. Der S&P 500 und der Tech-Index Nasdaq 100 markieren sogar neue Jahreshöhen. Trotzdem macht sich die Spannung vor der Leitzinsentscheidung in der kommenden Woche auf de…",
      url: "https://www.n-tv.de/wirtschaft/Tesla-befluegelt-Nasdaq-100-article24181311.html",
      urlToImage:
        "https://bilder4.n-tv.de/img/incoming/crop24181331/3541322862-cImg_16_9-w1200/412374685.jpg",
      publishedAt: "2023-06-09T21:05:57Z",
      content:
        "Mit leichten Gewinnen rettet sich der US-Aktienmarkt zum Wochenausklang über die Ziellinie. Der S&amp;P 500 und der Tech-Index Nasdaq 100 markieren sogar neue Jahreshöhen. Trotzdem macht sich die Spa… [+3621 chars]",
    },
    {
      source: {
        id: null,
        name: "Marketscreener.com",
      },
      author: "Reuters",
      title: "WH says Tesla chargers could be eligible for federal dollars",
      description:
        "(marketscreener.com) STORY: In yet another win for Elon Musk's Tesla in the battle over electric-vehicle chargers...https://www.marketscreener.com/news/latest/WH-says-Tesla-chargers-could-be-eligible-for-federal-dollars--44084556/?utm_medium=RSS&utm_content=2…",
      url: "https://www.marketscreener.com/news/latest/WH-says-Tesla-chargers-could-be-eligible-for-federal-dollars--44084556/?utm_medium=RSS&utm_content=20230609",
      urlToImage:
        "https://www.marketscreener.com/images/twitter_ZB_fdblanc.png",
      publishedAt: "2023-06-09T21:04:28Z",
      content:
        "STORY: In yet another win for Elon Musk's Tesla in the battle over electric-vehicle chargers...\r\n ...the White House on Friday said EV charging stations using Tesla's standard plugs would be eligible… [+1559 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "cnbc.com",
      title:
        "What Tesla charging partnerships with Ford and GM mean for the EV industry",
      description:
        "Tesla's Superchargers use a proprietary plug design, called the North American Charging Standard, or NACS, that doesn't work with non-Tesla EVs. Most other EVs and charging stations in the U.S. use the public-domain Combined Charging System (CCS) plug standar…",
      url: "https://biztoc.com/x/5745238679ad6d40",
      urlToImage: "https://c.biztoc.com/p/5745238679ad6d40/og.webp",
      publishedAt: "2023-06-09T21:04:16Z",
      content:
        "Tesla's Superchargers use a proprietary plug design, called the North American Charging Standard, or NACS, that doesn't work with non-Tesla EVs. Most other EVs and charging stations in the U.S. use t… [+283 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0320dfb7149849ebb6b534faec582255";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    console.log(parsedData);
  }
  render() {
    console.log("acha");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((elememnt) => {
            return (
              <div className="col-md-4" key={elememnt.url}>
                <NewsItem
                  title={elememnt.title ? elememnt.title : ""}
                  description={elememnt.description ? elememnt.description : ""}
                  imageUrl={elememnt.urlToImage}
                  newsUrl={elememnt.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
