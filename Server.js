const fs = require("fs")

const express = require("express");

const app = express();


app.post("/join", async (req, res, next) => {
try {
let contact = req.body
fs.appendFile("./BPNMembersSpreadsheet.csv", `${new Date().toString()},${contact.firstName},${contact.lastName},${contact.email},${contact.city},${contact.state},${contact.phoneNumber},${contact.preferredContactMethod},${contact.areYoucheckAllthatApply},$contact.pleaseTellusMoreaboutYourselfwhatWouldyouLiketheGrouptoKnowaboutYouieEmployercareerGoalsentrepreneurFieldofKnowledgeexperience},${contact.DoyouGivepermissionForyourInformationtoBeIncludedinTheBPNdirectory},${contact.howDidyouHearaboutBPN},${contact.additionalCommentsquestionsSuggestions}`)

}



catch (e) {
console.log(e)
next(e)


}



})