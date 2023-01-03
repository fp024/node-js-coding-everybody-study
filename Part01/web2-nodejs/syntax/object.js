// var members = ['egoing', 'k8805', 'hoya'];
// console.log(members[1]);

// var i = 0;
// while (i < members.length) {
//   console.log('array loop', members[i]);
//   i = i + 1;
// }

var roles = {
  programmer: 'egoing', // prettier가 객체의 키의 따옴표를 알아서 제거해 줌.
  designer: 'k8805',
  manager: 'hoya',
};
console.log(roles.designer);
console.log(roles['designer']);

for (var roleName in roles) {
  console.log('object => ', roleName, 'value => ', roles[roleName]);
}
