# AI Contract Clause Analyzer

A secure, AI-powered legal document analysis platform for HR, Legal, and Development teams. Streamline contract review processes with intelligent clause analysis, smart redlining, and secure document sharing.

## 🎯 Purpose

This application enables teams to:
- **Securely share sensitive documents** (NDAs, contracts, MSAs, etc.) via password protection or OTP
- **Analyze legal clauses** with AI-powered risk detection
- **Generate smart markdown redlines** for contract modifications
- **Maintain compliance-friendly audit trails** for all document interactions

## ✨ Key Features

### 🔐 Secure Document Sharing
- Password-protected document access
- One-Time Password (OTP) via SMS/email
- Expiring links with configurable timeouts
- AES-256 encryption for file storage
- TLS 1.2+ for all connections

### 🤖 AI-Powered Analysis
- Intelligent clause extraction using LangChain
- Risk scoring and detection with Anthropic Claude
- Smart markdown redline suggestions
- Automated compliance checking

### 📊 Audit & Compliance
- Comprehensive audit logging with pgAudit
- User activity tracking (edits, downloads, redlines)
- Timestamped audit trails
- Compliance-friendly reporting

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js
- **Language**: TypeScript
- **UI Components**: shadcn/ui + Tailwind CSS
- **Charts & Visualization**: Tremor.so
- **Authentication UI**: Better-Auth
- **Platform**: Vercel

### Backend
- **Framework**: FastAPI (Python)
- **AI Analysis**: 
  - LangChain (clause extraction)
  - Anthropic Claude (redline suggestions & risk scoring)
- **Queue System**: Celery + Redis + FastAPI
- **Platform**: Render

### Database & Storage
- **Database**: PostgreSQL + Prisma ORM
- **File Storage**: Supabase Storage
- **Audit Logging**: pgAudit

### Authentication & Security
- **Authentication**: Better-Auth + OTP via SMS/email
- **Secure Sharing**: Expiring links + OTP/password protection
- **Encryption**: AES-256 for file storage, TLS 1.2+ for connections

### DevOps & Monitoring
- **Secrets Management**: Doppler + Vercel
- **Monitoring**: Sentry (frontend + backend) - optional feature

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.9+
- PostgreSQL
- Redis
- Supabase account
- Anthropic API key
- Doppler account

### Frontend Setup
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env

# Run FastAPI server
uvicorn main:app --reload
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/        # shadcn/ui components
│   ├── lib/              # Utility functions
│   └── pages/            # Application pages
├── backend/              # FastAPI backend
│   ├── api/             # API routes
│   ├── services/        # Business logic
│   └── models/          # Data models
├── prisma/              # Database schema & migrations
└── docs/               # Documentation
```

## 🔧 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
BETTER_AUTH_SECRET=your_auth_secret
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/contract_analyzer
REDIS_URL=redis://localhost:6379
ANTHROPIC_API_KEY=your_anthropic_key
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
```

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)
- [Security Guidelines](docs/security.md)
- [Contributing Guidelines](docs/contributing.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for teams worldwide
