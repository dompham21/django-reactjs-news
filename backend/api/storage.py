import pyrebase
from pathlib import Path
import os

firebaseConfig = {
    "apiKey": "AIzaSyCgONOBtZjvvsQRpjLaPvnz5SMXYBFUVSc",
    "authDomain": "xunaunews.firebaseapp.com",
    "projectId": "xunaunews",
    "databaseURL": "https://xunaunews.firebaseio.com",
    "storageBucket": "xunaunews.appspot.com",
    "messagingSenderId": "246900748329",
    "appId": "1:246900748329:web:f1a837e88ff1cdce2fec38",
    "measurementId": "G-01E8JW1TFQ"
}

firebase = pyrebase.initialize_app(firebaseConfig)
storage = firebase.storage()

# storage.child(path_on_cloud).put(path_local)
# url_image = 'http://localhost:8000/media/images/abcxyz'
def up_image_to_cloud(url_image):
    path_on_cloud = "images/"
    x = url_image.split('/')
    name_image = x[-1]
    BASE_DIR = str(Path(__file__).resolve().parent.parent)
    path_local = BASE_DIR + "/media/images/" + name_image
    path_on_cloud += name_image
    storage.child(path_on_cloud).put(path_local)
    url = storage.child(path_on_cloud).get_url(None)
    os.remove(path_local)

    return url


