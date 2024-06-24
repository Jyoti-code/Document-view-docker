import React from 'react'
import Upload from './Upload'
import FileTable from './FileTable'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
    <Navbar/>
        <Upload/>
        <FileTable/>
    </div>
  )
}
