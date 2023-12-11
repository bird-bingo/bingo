const birdController = {};

birdController.getBirds = async (req, res, next) => {

  let stateCode = req.query.location;
  
  let url = `https://api.ebird.org/v2/data/obs/${stateCode}/recent`;

  console.log('stateCode', stateCode)

  // if no location given use default url
  if (stateCode === '') url = 'https://api.ebird.org/v2/data/obs/US/recent';

    fetch(url, {
      headers: {"x-ebirdapitoken": "k35m7c131mkp"}})
      .then(res => res.json())
      .then(data => {

        let birdList = data.map(item => item.comName);
        birdList = birdList.filter(item => item.length <= 20);
        console.log(birdList)
        res.locals.birdList = birdList.sort(() => 0.5 - Math.random()).slice(0, 25);
        return next();
      })
      .catch(err => console.log('App.componentDidMount: get species data: ERROR: ', err));
}

module.exports = birdController;