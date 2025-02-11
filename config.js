// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Đạt",

    // The title that appears in the browser tab
    // You can use emojis! 🐦🔥🔥🦅🦅
    pageTitle: "liệu em sẽ là chú chim của anh chứ? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🐦', '🔥', '🦅', '👉 ', '💦'],  // Heart emojis
        bears: ['👉', '👌']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Em đồng ý làm chú chim nhỏ của anh chứ ?",                                    // First interaction
            yesBtn: "Dạ",                                             // Text for "Yes" button
            noBtn: "Đéo",                                               // Text for "No" button
            secretAnswer: "Còn chờ gì nữa mà không lao vào em đi anh"           // Secret hover message
        },
        second: {
            text: "Em chắc rồi chứ",                          // For the love meter
            startText: "Chắc từng lày lày",                                   // Text before the percentage
            nextBtn: "Nết "                                         // Text for the next button
        },
        third: {
            text: "Anh hẹn em vào đêm valentine 14/2🌹", // The big question!
            yesBtn: "Dạ",                                             // Text for "Yes" button
            noBtn: "Đã nói là đéo"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Vãi lồn chim én em 👉👌 ",  // Shows when they go past 5000%
        high: "anh ơi 💦💦💦",              // Shows when they go past 1000%
        normal: "anh ới 💦💦💦"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Triển thôi em 👉👌💦💦💦",
        message: "Mời em về stu- của anh, ngay ở khu nhà anh Thu quả thanh bằng cái micro của anh Giọng em như quả chanh, chỉ auto-tune là nhanh Nhạc hay là lỗi của anh, tiền bay vào túi của anh",
        emojis: "👉👌💦💦💦"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#B82132",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#D2665A",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#F2B28C",     // Button color (should stand out against the background)
        buttonHover: "#F6DED8",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#09122C"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/doffmfupc/video/upload/v1739224901/moi_em_xqp9gf.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
