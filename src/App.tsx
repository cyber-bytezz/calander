
import { ChakraProvider } from "@chakra-ui/react";
import DragAndDrop from "./Components/DragAndDrop/DragAndDrop";

function App() {
  return (
    <ChakraProvider>
      <div style={{ height: "95vh" }}>
        {/* <Calendar /> */}
        {/* <CustomCalendar /> */}
        {/* <CalendarSteps /> */}
        <DragAndDrop />
      </div>
    </ChakraProvider>
  );
}

export default App;
