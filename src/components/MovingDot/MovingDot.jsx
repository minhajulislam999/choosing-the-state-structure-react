import React, { useState } from 'react'

function MovingDot() {
    const [positon, setPosition] = useState({ x: 0, y: 0 });

    // এখানে ৩টা জিনিস বুঝতে হবে:

// 🔹 position
//     position = { x: 0, y: 0 }


// 👉 dot - এর বর্তমান অবস্থান
// 👉 শুরুতে স্ক্রিনের(0, 0) পজিশনে

// 🔹 setPosition

// 👉 position পরিবর্তন করার ফাংশন
// 👉 এটা কল করলেই React আবার render করবে
    


return (
        <div>
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y:e.clientY
                });


            }}
        </div>
    )
}

export default MovingDot
