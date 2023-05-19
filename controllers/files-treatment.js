const File137 = require('../models/conf137');
const fetch =require('node-fetch');


/* Fetch all relations */
exports.getData137 = async (req, res, next) => {
  await File137.find().then(
    (files) => {
      res.status(200).json(files);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
/* send all sms */
/*exports.sendsms = async (req, res, next) => {
  const { description} = req.body;
  await Relation.find().then(
    (Relations) => { 
          Relations.forEach(async (element, key) => {  
                              const mySender = 'MACOMPTA';
                              /* const Url_str_accuse ="https://www.tunisiesms.tn/client/Api/Api.aspx?fct=dlr&key=8Xt1bBmrfe9Fuxj1tnAu9EXxNQmD9ilyxd2nzJ/ft5vUcv8d0FlnUbD/-/xkjFm6xYJgrZQib3Xq9c1qDuQfPIVaaOqRtTK9SD&msg_id=XXXX;YYYY";   */               
                               /*const Url_str ="https://www.tunisiesms.tn/client/Api/Api.aspx?fct=sms&key=8Xt1bBmrfe9Fuxj1tnAu9EXxNQmD9ilyxd2nzJ/ft5vUcv8d0FlnUbD/-/xkjFm6xYJgrZQib3Xq9c1qDuQfPIVaaOqRtTK9SD&mobile=216XXXXXXXX&sms=Hello+World&sender=YYYYYYY&date=jj/mm/aaaa&heure=hh:mm:ss";                  
                               const Url_str2 = Url_str.replace("Hello+World",`${description}`);
                               const Url_str3 = Url_str2.replace("YYYYYYY",mySender);
                               /*const Url_str_accuse1 = Url_str_accuse.replace("216XXXXXXXX",element.mobile)
                               const Url_str_accuse2 = Url_str_accuse1.replace("Hello+World",`veuillez noter que la date du ${item.date.split('T')[0]}est la date du ${item.title}`);
                               const Url_str_accuse3 = Url_str_accuse2.replace("YYYYYYY",mySender);
                               const Url_str_accuse4 = Url_str_accuse3.replace("jj/mm/aaaa",myDate);
                               const Url_str_accuse5 = Url_str_accuse4.replace("hh:mm:ss",myTime);
                               const finalurlaccuse=Url_str_accuse5*/
                               /*console.log(finalurlaccuse);*/
                                     /*const Url_str1 = Url_str3.replace("216XXXXXXXX",element.mobile)
                                     const finalurl=Url_str1                                    
                                     const response = await fetch(finalurl);
                                     /*const response2 = await fetch(finalurl);*/
                                    /*console.log('status code: ', response.status); // 👉️ 200
                                     if (!response.ok) {
                                       throw new Error(`Error! status: ${response.status}`);}*/
/*})
res.status(200).json(Relations);
    }
  )
};*/

/*insert many Relations*/
exports.createmultipledata = async (req, res, next) => {
  try {
let newdatas= req.body
  //const newRelation = new Relation({ title, date,description }) 
  newdatas.forEach((item, index) => {
item.prenom=`${newRelations[index].prenom}`
item.nom=`${newRelations[index].nom}`
item.mobile=`${newRelations[index].mobile}`
const newRelation = new Relation({firstname:item.prenom,lastname:item.nom,mobile:item.mobile});
console.log(newRelation)
newRelation.save();
   })
  res.status(201).json(
    {
      data: newRelations,
        type: "succès",
        message: "Evenements créés"
    }
);
} catch (error) {
  res.status(409).json({ message: error.message });
}
}

/* Delete singile Relation */
/*exports.deleteRelation = async (req, res, next) => {
  
    const id = req.params.id;
    const relation = await Relation.findById(id);
    if (!relation) return res.status(401).json({ error: 'Demande non trouvé !' });
    await Relation.findByIdAndDelete(id);

    res.status(200).json({
      data: null,
      message: 'relation supprimée avec succès'
    });
 
}

exports.getRelationbyid = (req, res, next) => {
    Relation.findOne({
      _id: req.params.id
    }).then(
      (Relation) => {
        res.status(200).json(Relation);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  }
  
exports.updateRelation =async  (req, res, next) => {
 
    try {
        
        
        const RelationObject = req.file ?
          {
            ...JSON.parse(req.body.Relation),
            ficheUrl: `${req.file.url}`
          } : { ...req.body };
        const _id = req.params.id;
        const relation =  await Relation.findById(_id);
        
        await Relation.findByIdAndUpdate(_id, { ...RelationObject});
            
        relation.updated = Date.now();
         await relation.save().
        then (()=> res.status(200).json({
          data: relation,
          message: 'relation modifié !'
        }))
        .catch(error => res.status(400).json({ error , message: 'opération non aboutie veuillez réessayer'}));
        
      } catch (error) {
        res.status(404).json({ error });
      }
  }
  exports.deleteRelations = async (req, res, next) => {
    try {
      
      await Relation.deleteMany();
  
      res.status(200).json({
        data: null,
        message: 'toutes les relations sont supprimés avec succès'
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  }*/