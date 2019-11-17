const { sortTitles } = require("../sortObjectTitles")
const library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245},
    { author: 'Suzanne Collins', title: 'Hockingjay: The Final Book of The Hunger Games', libraryID: 3245},
    { author: 'Suzanne Collins', title: 'Nockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

test ("to check if first title is HockingJay", () => {
  const result = sortTitles(library)
  expect(result[0].title).toEqual('Hockingjay: The Final Book of The Hunger Games')
})