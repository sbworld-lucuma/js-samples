let a = [
  [
    [
      {id:1},{id:6}
    ]
  ],
  [
    [
      {id:2},{id:5}
    ]
  ],
  [
    [{id:3},{id:4}]
  ]
];

for(const item of a) {
   for(const itemNested of item) {
     for(const itemBottom of itemNested)      {
       console.log(itemBottom);
     }
   }
}

for(var i=0;i<a.length;i++) {
  for(var j=0;j<a[i].length;j++)   {
    for(var k=0;k<a[i][j].length;k++) {
      console.log(a[i][j][k])
    }
  }
}
