import api from './api'
import dataFetcher from '../utils/dataFetcher'
import EventManager from './events/EventManager'
import SideBar from './sidebar';
import DisplayPanel from './display-panel'

const store = []
const displayPanel = DisplayPanel();
const sideBar = SideBar()
const eventManager = EventManager.getInstance();




eventManager.handle.addEventListener('updateDisplay', (e)=>{
  displayPanel.updateDisplay(e.detail); 
})

 

const appInit = async function (){
  

       const departmentData = await dataFetcher.getRequest(api.getAllDepartments)
       console.log(departmentData)
       const defaultWidgitData = await dataFetcher.getRequest(api.getDepartment("training"))
       console.log(defaultWidgitData)
       sideBar.init(departmentData)
       displayPanel.init(defaultWidgitData)
}

appInit()
 


 
 