var book = require("../lib/gradeBook").book

exports["Can add new Grade"] = function(test){
	book.addGrade(90);
        var count = book.getCountOfGrades();
        
        test.equal(count,1);
	test.done();
}
