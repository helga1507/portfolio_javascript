const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const pathMain = path.join(
  path.dirname(process.mainModule.filename),
  'todos.json'
);

const getRandomID = () => '_' + Math.random().toString(36).substr(2, 9);

const getTodos = cb => {
  fs.readFile(pathMain, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

const setTodos = updatedProducts => {
  fs.writeFile(pathMain, JSON.stringify(updatedProducts), err => {
    if(err) console.log('err write products',err);
  });
};

router.get('/api/getTodos', (req, res) => {
  getTodos(data => {
    res.send(data);
  });
});

router.post('/api/addTodo', (req, res) => {
  getTodos(data => {
    const todo = {
      id: getRandomID(),
      name: req.body.todo
    };

    const updatedList = [...data, todo];

    setTodos(updatedList);

    res.send(todo);
  });
});

router.post('/api/deleteTodo', (req, res) => {
  getTodos(data => {
    const {id} = req.body;
    const index = data.findIndex(item => item.id === id);
    const updatedList = [...data];

    if(~index) {
      updatedList.splice(index,1);

      setTodos(updatedList);

      res.send({index});
    }
    else {
      res.status(404).send({error: 'Элемент с таким id не найден'})
    }

  });
});
router.post('/api/editTodos', (req, res) => {
  const {todos} = req.body;

  setTodos(todos);

  res.send({todos});
});

module.exports = router;