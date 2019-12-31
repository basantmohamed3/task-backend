const helper = require("../helpers/helper");
exports.createSchedule = (req, res, next) => {

  try {
    let chapters = 30;
    const startDate = req.body.date;
    const daysPerWeek = req.body.days;
    const sessionsNo = req.body.sessions;

    for (var i = 0; i < daysPerWeek.length; i++) {
      if (daysPerWeek[i] > 6) {
        return res.json({
          status: 401,
          message: "Please enter a valid day number less than 7"
        });
      }
    }

    if (
      helper.isString(startDate) &&
      helper.notEmptyString(startDate) &&
      helper.isObject(daysPerWeek) &&
      helper.notEmpty(daysPerWeek) &&
      helper.isNumber(sessionsNo)
    ) {
      let weekDays = daysPerWeek.length;
      //get the start date in Date format
      let theStartDate = new Date(startDate);
      //console.log("date format"+ theStartDate)

      //get the total number of days to finish the book
      let daysToFinishBook = ((sessionsNo * chapters) / weekDays) * 7;
      //convert the string input of date to real date format
      var theEndDate = new Date(startDate);
      theEndDate.setDate(theEndDate.getDate() + daysToFinishBook);
      // console.log("end date"+ theEndDate)
      // add the total number of days calculated to the beginning date to get the exact date of the last day

      var result = [];
      while (theStartDate < theEndDate) {
        for (var i = 0; i < daysPerWeek.length; i++) {
          var day = daysPerWeek[i];

          theStartDate.setDate(
            theStartDate.getDate() + ((day - theStartDate.getDay() + 7) % 7)
          );

          result.push(new Date(theStartDate));
        }
      }

      //    console.log(result.split('T')[0])
      return res.json({
        status: 200,
        bookSchedule: result,
        message: "Schedule created successfully"
      });
    } else {
      return res.json({ statue: 401, message: "Please enter valid values" });
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 500, message: "error happened" });
  }
};
