import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Tree from './scripts/Tree';
import { createDistribution, formatBits } from './scripts/helpers';
const mermaid = require('mermaid');

function App() {

    const [message, setMessage] = useState("")
    const [rawDis, setRawDist] = useState()
    const [treeData, setTreeData] = useState("")
    const [bitData, setBitData] = useState()
    const [type, setType] = useState(0)

    const generateTree = () => {
        setRawDist(createDistribution(message))
        let tree = new Tree(createDistribution(message))
        setTreeData(tree.generateMarkdown());
        setBitData(tree.encode(message))
        console.log(tree.encode(message))
    }

    const resetFrame = () => {
        setMessage("")
        setRawDist()
        setTreeData("")
    }

    return (
        <div className="App">
            <Navbar />
            <div className='section split-pane'>
                <div className='left-pane'>
                    <textarea
                        className='text-box'
                        placeholder='Enter your message here...'
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    {treeData ?
                        <button className="btn-red" onClick={resetFrame}>Reset Tree</button>
                        :
                        <button onClick={generateTree}>Generate Tree</button>
                    }
                    {treeData ?
                        <div className='chartview'>
                            <h3>Encoding Chart:</h3>
                            <Mermaid
                                chart={treeData}
                            />
                        </div>
                        : <></>}
                </div>
                <div className='right-pane'>
                    {type === 0 && rawDis ? <RawDistribution dist={rawDis} changeMenu={setType} /> : <></>}
                    {type === 1 && rawDis ? <ViewBits dist={bitData} changeMenu={setType} /> : <></>}
                </div>
            </div>
        </div>
    );
}

function ViewBits(props) {

    const [efficiency, setEfficiency] = useState(0)

    const changeMenu = () => {
        props.changeMenu(0)
    }

    useEffect(() => {
        let totalBits = 0
        let compressed = 0
        for (let i = 0; i < props.dist.length; i++) {
            totalBits += 8
            compressed += props.dist[i].bits.length
        }
        let efficiency = Math.round((1 - (compressed / totalBits)) * 100)
        setEfficiency(efficiency)
    }, [])

    return (
        <div className='rawdist'>
            <div className='sidebar-header'>
                <h3>Bit Breakdown:</h3>
                <h5 onClick={changeMenu}>View Distribution</h5>
            </div>
            <span className='eff'>{efficiency}% efficiency improvement</span>
            {
                Object.keys(props.dist).map((item, index) => (
                    <div className='cell'>
                        <p key={index}>{props.dist[index].character}:{"\t"}</p>
                        <p>{formatBits(props.dist[index].bits)}</p>
                    </div>
                ))
            }
        </div >
    )
}

function RawDistribution(props) {

    const changeMenu = () => {
        props.changeMenu(1)
    }

    return (
        <div className='rawdist'>
            <div className='sidebar-header'>
                <h3>Raw Distribution:</h3>
                <h5 onClick={changeMenu}>View Bits</h5>
            </div>
            {
                Object.keys(props.dist).map(([key, value], index) => (
                    <div className='cell'>
                        <p key={key}>{key}:{"\t"}</p>
                        <p>{props.dist[key]}</p>
                    </div>
                ))
            }
        </div >
    )
}

function Mermaid(props) {

    useEffect(() => {
        mermaid.contentLoaded();
    }, [])
    return <div className="mermaid">{props.chart}</div>;
}

export default App;
