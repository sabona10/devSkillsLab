// The ids can be generated using:
// Date.now() % 1000000
const skills = [
  {id: 111, skill: 'Javascript'},
  {id: 222, skill: 'Html'},
  {id: 333, skill: 'Node js'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};


function update(id, updatedSkill) {
  const skill = skills.find(t => t.id === parseInt(id));
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(t => t.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
  return skills;
}