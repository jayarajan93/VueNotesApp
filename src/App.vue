<template>
  <div id="app">
    <h1>Notes Application</h1>
    <p>Name</p>
    <input type="textbox" name="Name" v-model="Name" placeholder="Name...">
    <p>Notes</p>
    <input type="text" name="Note" v-model="Note" placeholder="Enter your notes here">
    <br>
   
<button @click="View">View</button>
<button @click="Edit">Edit</button>
<button @click="Delete">Delete</button>
<button @click="Add">Add</button>
<br>
<br>
<input type="text" name="Notes" v-model="Notes">{{Notes}}
    <router-view/>
  </div>
</template>

<script>
import ViewNotesService from './services/ViewNotesService'
import NotesService from './services/AddNotesService'
import DeleteNotesService from './services/DeleteNotesService'
import EditNotesService from './services/EditNotesService'
export default {
name:'app',
data() {
  return{
  Name:"",
  Note:"",
  Notes:""
  }
  },
  methods:{
    async View(){
      const response=await ViewNotesService.View({
        Name:this.Name
    })
    console.log(`${response.data}`)
    },
  async Add(){
const response=await NotesService.Add({
  Name:this.Name,
  Note:this.Note
})
console.log(`${response.data} Added`)

  },
  async Delete(){
    const response= await DeleteNotesService.Delete({
      Name:this.Name
    })
    console.log(`${response.data} Deleted`)
  },
  async Edit(){
    const response=await EditNotesService.Edit({
      Name:this.Name,
      Note:this.Note
    })
    console.log(`${response.data} Edited`)
  }
  }
}

</script>


<style>


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
