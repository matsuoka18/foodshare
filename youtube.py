from googleapiclient.discovery import build
from yt_dlp import YoutubeDL
import webbrowser
from re import template
from jinja2 import Template, Environment, FileSystemLoader
api_key = 'AIzaSyCTgSaJMaANQLg0-5rf-Zu8cD9zg-AVxzs'
text = input('検索ワードを入力')
textt = text
def get_videos_search(keyword):
    youtube = build('youtube','v3',developerKey=api_key)
    youtube_query = youtube.search().list(q=keyword,part='id,snippet',maxResults=10)
    youtube_res = youtube_query.execute()
    return youtube_res.get('items',[])

result = get_videos_search(text)
count = 0
text = []
text2 = []
text3=[]
for item in result:

    if item['id']['kind']== 'youtube#video':
      url = 'https://www.youtube.com/watch?v='+item['id']['videoId']
      dada = "["+item['id']['videoId']+"]"
      text3.append(dada)
      ydl_opts = {'format': 'mp4', "trim_file_name":80}
      with YoutubeDL(ydl_opts) as ydl:
         ydl.download([url])
      count+=1
      title = item['snippet']['title']
      print(title)
      text2.append(title)
  
      print(url)
      text.append(url)
print(text)
print(text2)
env = Environment(loader=FileSystemLoader('./', encoding='utf8'))
tmpl = env.get_template('youtube.j2')
#設定ファイル読み込み
#with open('parameter.json') as f:
 #json.load(f)
params = {
    "se": textt,
  "title1":text2[0],
  "url1":text[0],
  "id1":text3[0],
    "title2":text2[1],
  "url2":text[1],
  "id2":text3[1],
    "title3":text2[2],
  "url3":text[2],
  "id3":text3[2],
    "title4":text2[3],
  "url4":text[3],
  "id4":text3[3],
    "title5":text2[4],
  "url5":text[4],
  "id5":text3[4],
    "title6":text2[5],
  "url6":text[5],
  "id6":text3[5],
    "title7":text2[6],
  "url7":text[6],
  "id7":text3[6],
    "title8":text2[7],
  "url8":text[7],
  "id8":text3[7],
    "title9":text2[8],
  "url9":text[8],
  "id9":text3[8],

}
  #"title10":text2[9],
  #"url10":text[9],
#レンダリングして出力
rendered_html = tmpl.render(params)
with open('youtube.html','w') as f:
  f.write(rendered_html)
rendered_s = tmpl.render(params)
print(rendered_s)

webbrowser.open('youtube.html')


