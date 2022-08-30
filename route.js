module.exports = function(app)
{
    //student
    app.use('/api/v1/students', require('./src/api/student'));

    //teacher
    app.use('/api/v1/teachers', require('./src/api/teacher'));
 
    //course
    app.use('/api/v1/course', require('./src/api/course'));

}