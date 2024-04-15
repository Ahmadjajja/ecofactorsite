import requests
from googlesearch import search
from bs4 import BeautifulSoup

class WebScrapper:
    def __init__(self, query, num_results=10):
        self.num_results = num_results
        self.query = query
        

    def find_urls(self):
        #getting urls of related google search
        urls = search(self.query, num_results=self.num_results, sleep_interval=2)
        return urls

    def scrape_content(self, url):
        #scrape content from urls using bs4
        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.content, 'html.parser')
            paragraphs = soup.find_all('p')
            content = ' '.join([p.get_text() for p in paragraphs])
            return content
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            return None

    def webscrapper(self):
        urls = self.find_urls()
        for url in urls:
            content = self.scrape_content(url)
            print(content)
