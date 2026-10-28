 const HeaderstudentForm = () => {
    return(
    <>
    <form id="studentForm">

        <label for="studentName">Student Name:</label>
        <input type="text" id="studentName" required/>

        <label for="program">Program:</label>
        <input type="text" id="program" required/>

        <button type="submit">Add Student</button>

    </form>
    </>
    )
 }

 export default HeaderstudentForm;