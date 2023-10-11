import { useState } from "react";
import CoolDots from "./CoolDots";

export default function CoolDotsDemo() {
    const [rows, setRows] = useState<number>(10);
    const [cols, setCols] = useState<number>(10);
    const [sens, setSens] = useState<number>(15);
    const [sharp, setSharp] = useState<number>(8);

    return (
        <>
            <div className="demo-settings">
                <div className="setting">
                    <label>Rows</label>
                    <input type="number" value={rows} onChange={e => setRows(parseInt(e.target.value))} />
                </div>

                <div className="setting">
                    <label>Columns</label>
                    <input type="number" value={cols} onChange={e => setCols(parseInt(e.target.value))} />
                </div>

                <div className="setting">
                    <label>Sensitivity</label>
                    <input type="number" value={sens} onChange={e => setSens(parseInt(e.target.value))} />
                </div>

                <div className="setting">
                    <label>Sharpness</label>
                    <input type="number" value={sharp} onChange={e => setSharp(parseInt(e.target.value))} />
                </div>
            </div>
            <CoolDots rows={rows} cols={cols} sensitivity={sens} sharpness={sharp} />
        </>
    );
}