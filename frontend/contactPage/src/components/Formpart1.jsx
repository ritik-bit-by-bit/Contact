const Formpart1=()=>{
    return (
        <div className="flex pl-10 pr-10 pd-3 justify-around">
<div class="form-container ">
      <form class="form">
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="text" id="email" name="email" required=""/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    <img src="./images/free.png" alt="customer"/>
        </div>
    )
}
export default Formpart1;