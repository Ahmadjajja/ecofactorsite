from scrapper import WebScrapper

def main():
    query = "what are components will be used to manufecture IOT based single phase energy meter"
    num_results = 10

    # Create an instance of the WebScraper class
    scraper = WebScrapper(query, num_results)

    # Call the run method to fetch URLs, scrape content, and save to files
    scraper.webscrapper()

if __name__ == "__main__":
    main()
