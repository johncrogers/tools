// commonResourceNames: resource | ResourceActionTypes | actionGenerator | ACTION_TAG | ActionTag
// reduxFiles: 'action | reducer | etc'
//
// (names:{key in commonResourceNames: string})
// create reduxResources: {key in reduxFiles: (names)=> fileContent: string[]}
//
//
// for key in reduxFiles
// create each file {name:string, content:string[]}
