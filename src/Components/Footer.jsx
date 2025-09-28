import Logo from '../assets/logo.png'

const Footer = () => (
    <footer className="bg-white border-t border-gray-300 mt-auto">
        <div className="container mx-auto px-6 py-6 text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-2">
                <img src={Logo} className="w-9 h-8 text-blue-600" alt="" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">Disha</span>
            </div>
            <p className="text-sm">Empowering students to make informed educational decisions</p>
            <p className="text-xs text-gray-400 mt-2">&copy; 2025 Disha. Supporting government college enrollment across India.</p>
        </div>
    </footer>
);

export default Footer