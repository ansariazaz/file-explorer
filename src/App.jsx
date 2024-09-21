
import './App.css'
import explorer from './data/data'
import Folder from './component/Folder'
import useTraverseTree from './hooks/use-traverse-tree'
import { useState } from 'react'
function App() {
    const [explorerData, setExplorerData] = useState(explorer)
     const {insertNode} = useTraverseTree()
     const handleInsertNode = (folderId, item, isFolder)=>{
          const finalTree = insertNode(explorerData,folderId, item, isFolder)
          setExplorerData(finalTree)
     }
  return (
    <>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode}/>
    </>
  )
}

export default App
