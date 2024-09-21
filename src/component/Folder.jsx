import React, { useState } from 'react'

const Folder = ({ explorerData, handleInsertNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })
    const handleAddNew = (e, isFolder) => {
        e.stopPropagation()
        setIsOpen(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }
    const onAddFolder = (e)=>{
        //add logic
        if(e.keyCode ===13 && e.target.value){
            handleInsertNode(explorerData.id,e.target.value,showInput.isFolder)
            setShowInput({
                ...showInput,
                visible: false,
            })
        }
    }
    if (explorerData.isFolder) {
        return (
            <div className='container'>
                <div className='main' onClick={() => setIsOpen(!isOpen)}>
                    <span >🗂️{explorerData.name}</span>
                    <div className='btns'>
                        <button className='btn1' onClick={(e) => handleAddNew(e, true)}>+Folder</button>
                        <button className='btn2' onClick={(e) => handleAddNew(e, false)}>+File</button>
                    </div>
                </div>
                {showInput.visible && (
                    <div className='inputCont'>
                        <span>{showInput.isFolder?"🗂️":"📄"}</span>
                        <input type="text" className='inputfield' autoFocus onBlur={() => setShowInput({ ...showInput, visible: false })}   onKeyDown={ (e)=>onAddFolder(e)}/>
                    </div>

                )}
                {isOpen && (
                    <div className='items'>
                        {explorerData.items.map((item) => (
                            <Folder explorerData ={item} key={item.id} handleInsertNode={handleInsertNode}/>
                        ))}
                    </div>
                )}
            </div>
        )
    } else {
        return <span> 📄{explorerData.name}</span>
    }

}
export default Folder