const birdController = {};

birdController.getBirds = async (req, res, next) => {
    fetch('https://api.ebird.org/v2/data/obs/US-CA-001/recent', {
      headers: {"x-ebirdapitoken": "k35m7c131mkp"}})
      .then(res => res.json())
      .then(data => {

        const birdList = data.map(item => item.comName);
        res.locals.birdList = birdList.sort(() => 0.5 - Math.random()).slice(0, 25);
        return next();
      })
      .catch(err => console.log('App.componentDidMount: get species data: ERROR: ', err));
}

module.exports = birdController;