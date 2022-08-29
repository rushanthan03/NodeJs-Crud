module.exports = function(app)
{
    //student
    app.use('/api/v1/students', require('./src/student'));

    //teacher
    app.use('/api/v1/teachers', require('./src/teacher'));

}