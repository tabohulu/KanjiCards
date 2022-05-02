from encodings import utf_8
from flask import request,jsonify
from app import app,db
from app.models import Kanji,PrimitiveElement

@app.route('/home')
def home():
    return {'hello':'Hello World!'}


@app.route('/save_kanji',methods=['POST'])
def save_kanji():
    # Kanji.delete_all_kanjis()
    obj=request.get_json(force=True)
    try:
       status=Kanji.create_kanji(obj)
       return{'status':status}
    except Exception as e:
        return {'status':500,'message':e}

    


@app.route('/get_kanji',methods=['GET'])
def get_kanji():
    # Kanji.delete_all_kanjis()
    kanjis=Kanji.get_kanji()

    # print(kanjis.character)
    array=[]
    for kanji in kanjis:
        
        # print(kanji.character)
        obj={
      "number": kanji.id,
      "chapter": kanji.chapter,
      "character": kanji.character,
      "meaning": kanji.meaning,
      "p_elems": [],
      "as_p_elem": "",
      "confidence": kanji.confidence,
      "story": kanji.story
    }
        array.append(obj)

    #     print(kanji.character)

    return {'data':array}    