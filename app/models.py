from flask import jsonify
from sqlalchemy.dialects.postgresql import VARCHAR
from app import db


class Kanji(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    chapter=db.Column(db.Integer)
    character=db.Column(db.String(2))
    character_img=db.Column(db.String(128))
    meaning=db.Column(db.String(16))
    confidence=db.Column(db.Integer,default=0)
    story=db.Column(db.String(128))
    primitive_elements = db.relationship('PrimitiveElement',backref='moji',lazy ='dynamic')#Kanji.primitive_elements returns all primitive elements associated with the Kanji

    @staticmethod
    def delete_all_kanjis():
        kanjis=Kanji.query.all()
        for kanji in kanjis:
            print(kanji)
            db.session.delete(kanji)
        db.session.commit()  

    def __repr__(self):
        return 'character {} with meaning {} and id {}'.format(self.character, self.meaning,self.id)

    @staticmethod
    def create_kanji(obj):
        charr=obj['character']
        kanji=Kanji.query.filter_by(character=charr).first()
        if kanji is None:
            kanji =Kanji(chapter=obj['chapter'],character=charr,meaning=obj['meaning'],confidence=obj['confidence'],story=obj['story'])
            db.session.add(kanji)
            if(obj['as_p_elem']):
                primitive_elem=PrimitiveElement(meaning=obj['as_p_elem'],moji=kanji)
                db.session.add(primitive_elem)
            if(len(obj['p_elems'])):
                for elem in obj['p_elems']:
                    primitive_elem=PrimitiveElement(meaning=elem,moji=kanji)
                    db.session.add(primitive_elem)
            db.session.commit()
            return 200
        return 201

    @staticmethod
    def get_kanji():
        return Kanji.query.all()

class PrimitiveElement(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    meanings=db.Column(db.String(64))
    kanji_id=db.Column(db.Integer,db.ForeignKey('kanji.id'))  #PrimitiveElement.moji return the kanji associated with this primitive element 
    notes = db.Column(db.String(256))

    def __repr__(self) -> str:
        return 'primitive element with meanings {}'.format(self.meanings)  

        
           