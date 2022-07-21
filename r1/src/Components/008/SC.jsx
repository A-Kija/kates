import { useState } from "react";

function SC() {

    const [form, setForm] = useState(true);

    return (
        <div className="super-container">
            <div onClick={() => setForm(s => !s)} className={'one ' + (form ? 'sq' : 'ci')}>
            </div>
            <div onClick={() => setForm(s => !s)} className={'two ' + (form ? 'ci' : 'sq')}>
            </div>
        </div>
    );
}
export default SC;