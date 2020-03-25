/******************************************

var IIFETest = (function(){
  //FIXME:
    var x = 5

    //code which is in the return function is accessable globally.
    return{
        a:x
    }
})();

console.log(IIFETest.a) // 5
console.log(IIFETest.x) // undefined
*/

var budgetController = (function() {
  var Expense = function(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };
  var Income = function(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    },
    budget:0,
    percentage:0
  };

  var calculateTotal = function(type){
    var sum = 0;
    data.allItems[type].forEach(function(cur){
      sum += cur.value
    });
    data.totals[type] = sum;
  }

  return {
    addItem: function(type, desc, value) {
      var newItem, id;
      if (data.allItems[type].length > 0) {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1 || 0;
      } else {
        id = 0;
      }
      if (type === "exp") {
        newItem = new Expense(id, desc, value);
      } else if (type === "inc") {
        newItem = new Income(id, desc, value);
      }
      data.allItems[type].push(newItem);

      return newItem;
    },
    budgetCal: function(){
      //Calculate total:
      calculateTotal('inc')
      calculateTotal('exp')

      data.budget = data.totals.inc - data.totals.exp;
      
      data.percentage = Math.floor((data.totals.exp/data.totals.inc) * 100)

    },
    getBudget: function(){
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },
    deleteItem:function(type,id){
      var ids = data.allItems[type].map(function(current){
        return current.id
      });
      var index =  ids.indexOf(id)

      if(index !== -1){
        data.allItems[type].splice(index,1)
      }

    },
    forTest: function(){
      return data;
    }
  };
})();









// ------------UIController--------------------------------------------------------------------

var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel:".budget__income--value",
    expenseLabel:".budget__expenses--value",
    percentageLabel:".budget__expenses--percentage",
    container:".container"

  };

  return {
    getInput: function() {
      var type = document.querySelector(DOMStrings.inputType).value; // will be either inc or exp
      var desc = document.querySelector(DOMStrings.inputDesc).value;
      var value = document.querySelector(DOMStrings.inputValue).value * 1;

      return {
        type,
        desc,
        value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    },
    addListItem: function(obj, type) {
      //create HTML string with Placeholders which well be replaced by objects sent to this function.
      var newHtml, html, element;
      if (type === "inc") {
        element = DOMStrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMStrings.expenseContainer;
        html =
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.desc);
      newHtml = newHtml.replace("%value%", obj.value);

      //Insert Replaced HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    deleteListItem:function(selectorId){
      var el = document.getElementById(selectorId)
      el.parentNode.removeChild(el)

    },
    clearFields: function() {
      var fields, fieldArr;
      fields = document.querySelectorAll(
        DOMStrings.value +
          "," +
          DOMStrings.inputDesc +
          "," +
          DOMStrings.inputValue
      );

      fieldArr = Array.prototype.slice.call(fields);

      fieldArr.forEach(function(current, index, array) {
        current.value = "";
      });
      fieldArr[0].focus();
    },
    displayBudget: function(obj){
      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
      document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';

    }
  };
})();








//------------------------Master Controller ------------------------------


var masterController = (function(bc, uc) {
  var setupEventListener = function() {
    var DOM = uc.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var updateBudget = function(){
    bc.budgetCal();
    var budget = bc.getBudget()
    uc.displayBudget(budget)
    
  }

  var ctrlAddItem = function() {
    //1. Get the field input data
    var input = uc.getInput();
    console.log(input);

    if (input.desc !== "" && !isNaN(input.value) && input.value > 0) {
      //2. Add the item to the budge controller

      var newItem = bc.addItem(input.type, input.desc, input.value);
      //3. Add the item to the Ui
      uc.addListItem(newItem, input.type);
      //4.Clearing and focusing back to the input fields.
      uc.clearFields();
      //5.Update Budget function
      updateBudget()
      var budget = bc.getBudget()
      //6.Display Budget on UI
      uc.displayBudget(budget)
    }
  };
  var ctrlDeleteItem = function(event){
    var item,splitItem,type,id;
    item = event.target.parentNode.parentNode.parentNode.parentNode.id
    if(item){
      splitItem = item.split('-')
      type = splitItem[0]
      id = splitItem[1]*1
    }

    //Delete item from Data
    bc.deleteItem(type,id);
    //Delete from UI
    uc.deleteListItem(item);
    //Update the Data
    updateBudget();

    
  }
  return {
    init: function() {
      console.log("Application has started..");
      uc.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0
      })
      setupEventListener();
    }
  };
})(budgetController, UIController);

masterController.init();
