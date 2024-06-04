import Qrcode from './qrcodepix.png';

function QRcode ()
{
    return (
        <div  className='qrcode'>
            <img src = {Qrcode} alt = 'Era pra ter um QRcode :(' width={400}></img>
        </div>
    );


}

export default QRcode;