
import Button from "./components/button/button";
import MainHeading from "./components/headings/headings";
import Ordered from "./components/listitems/orderedlist";
import Unordered from "./components/listitems/unorderedlist";
import Tab from "./components/Table/Table";
import Custom from "./components/cards/customimage.js"
const App=()=>{
  return (<div>
  <Button></Button>
 <Button></Button>
 <Button></Button>
 <MainHeading></MainHeading>
 <Ordered></Ordered>
 <Unordered></Unordered>
 <Tab></Tab> 
 <Custom/>

  </div>
  );
};
export default App;
