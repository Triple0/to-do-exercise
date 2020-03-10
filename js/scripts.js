function addTask() {

  var newTask = document.getElementById('to-do').value;
  var uList = document.getElementById( 'new_task' );
  var section = document.getElementById( 'new-tasks' );
  if (newTask.length > 0) {
    var newList = document.createElement( 'LI' );
    var checkBox = document.createElement( 'INPUT' );
    var button = document.createElement( 'INPUT' );

    checkBox.setAttribute("type", "checkbox");
    button.setAttribute("type", "button");

    newList.appendChild(checkBox);
    newList.innerHTML += newTask;
    newList.appendChild(button);

    uList.appendChild(newList);   

    
  }
  
}

/**
 *    

// {/* <label for="fuel">Fuel level:</label>

/* <meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>

label {
    padding-right: 10px;
    font-size: 1rem;
}

<label for="file">File progress:</label>

<progress id="file" max="100" value="70"> 70% </progress>

label {
    padding-right: 10px;
    font-size: 1rem;
}


<div>
  <input type="checkbox" id="scales" name="scales"
         checked>
  <label for="scales">Scales</label>
</div>

<div>
  <input type="checkbox" id="horns" name="horns">
  <label for="horns">Horns</label>
</div>*/