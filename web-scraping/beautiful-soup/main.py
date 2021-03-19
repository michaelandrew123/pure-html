from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup


my_url = "https://vitascribe.ca/collections/gluten-free"

#opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

#html parse
page_soup = soup(page_html, "html.parser")
#print(page_soup.body.div)

#grab each product
velaProBlocks = page_soup.findAll("div", {"class":"velaProBlock"}) 
filename = "products.csv"

headers = "title\n"
 
f = open(filename, "w")

f.write(headers)

for velaproblock in velaProBlocks: 
    title = velaproblock.findAll('div', {"class":"proContent"})
    product_title = title[0].h5.text.strip()

    print("title : " + product_title ); 
    f.write(product_title.replace(",","|") + "\n") 
f.close()
