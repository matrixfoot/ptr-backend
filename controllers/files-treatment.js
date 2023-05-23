const Compconf = require('../models/conf137');
const fetch =require('node-fetch');
const User = require('../models/user');


/* Fetch all compconf */
exports.getcompconf = async (req, res, next) => {
  await Compconf.find().then(
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
exports.createcompconf = async (req, res, next) => {   
const origin =req.get('origin');
let datas=req.body 
datas.forEach((item, index) => {
  const newcompconf = new Compconf({...item});
  newcompconf.doctype='fichier compconf'
  newcompconf.save().
  then (()=>res.status(200).json({
    data: newcompconf,
    message: "Votre compconf a été crée avec succès"
  })) 
}
)  
}
/* Delete single compconf */
exports.deletecompconfbyid = async (req, res, next) => {
  
    const id = req.params.id;
    const compconf = await Compconf.findById(id);
    if (!compconf) return res.status(401).json({ error: 'Demande non trouvé !' });
    await Compconf.findByIdAndDelete(id);

    res.status(200).json({
      data: null,
      message: 'compconf supprimée avec succès'
    });
 
}

exports.getcompconfbyid = (req, res, next) => {
    Compconf.findOne({
      _id: req.params.id
    }).then(
      (compconf) => {
        res.status(200).json(compconf);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  }
  
exports.updatecompconf =async  (req, res, next) => {
 
    try {
        
        
        const compconfObject = req.file ?
          {
            ...JSON.parse(req.body.compconf),
            ficheUrl: `${req.file.url}`
          } : { ...req.body };
        const _id = req.params.id;
        const compconf =  await Compconf.findById(_id);
        
        await Compconf.findByIdAndUpdate(_id, { ...compconfObject});
            
        compconf.updated = Date.now();
         await compconf.save().
        then (()=> res.status(200).json({
          data: compconf,
          message: 'compconf modifié !'
        }))
        .catch(error => res.status(400).json({ error , message: 'opération non aboutie veuillez réessayer'}));
        
      } catch (error) {
        res.status(404).json({ error });
      }
  }
  exports.deletecompconfs = async (req, res, next) => {
    try {
      
      await Compconf.deleteMany();
  
      res.status(200).json({
        data: null,
        message: 'tous les fichiers compconf sont supprimés avec succès'
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  }