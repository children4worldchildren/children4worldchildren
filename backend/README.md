# Children4worldchildren Backend API

Backend server for Children4worldchildren website.

## Features

- **Authentication**: JWT-based authentication with admin login
- **Database**: MongoDB with Mongoose ODM
- **File Upload**: Image upload and management with Multer
- **RESTful API**: Complete CRUD operations for all entities
- **Security**: Password hashing, CORS, input validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `config.env` and update the values:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/children4worldchildren_db
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   UPLOAD_PATH=./uploads
   MAX_FILE_SIZE=5242880
   FRONTEND_URL=http://localhost:5173
   ```

3. **Initialize database:**
   ```bash
   npm run init-db
   ```
   This creates:
   - Default admin user (username: `admin`, password: `admin123`)
   - Default company information
   - Default team members

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/change-password` - Change password
- `POST /api/auth/create-admin` - Create new admin (admin only)

### Company Information
- `GET /api/company` - Get company info
- `PUT /api/company` - Update company info (admin only)
- `PATCH /api/company` - Partial update (admin only)

### Images
- `GET /api/images` - Get all images
- `GET /api/images/:key` - Get image by key
- `POST /api/images/upload` - Upload image (admin only)
- `DELETE /api/images/:key` - Delete image (admin only)
- `GET /api/images/url/:key` - Get image URL

### Team Members
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get team member by ID
- `POST /api/team` - Create team member (admin only)
- `PUT /api/team/:id` - Update team member (admin only)
- `DELETE /api/team/:id` - Delete team member (admin only)
- `PATCH /api/team/reorder` - Reorder team members (admin only)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)
- `PATCH /api/projects/reorder` - Reorder projects (admin only)
- `PATCH /api/projects/:id/toggle-featured` - Toggle featured status (admin only)

## Database Models

### User
- Authentication and authorization
- Password hashing with bcrypt
- JWT token generation

### Company
- Company information and contact details
- Mission, vision, and description

### Image
- Image metadata and file paths
- Categories: logo, team, services, projects, about, office
- File size and type validation

### TeamMember
- Team member profiles
- Qualifications, experience, specializations
- Ordering and active status

### Project
- Project details and descriptions
- Categories, status, and featured flags
- Objectives and outcomes

## File Upload

Images are stored in the `uploads/` directory and served statically. Supported formats:
- JPEG, PNG, GIF, WebP
- Maximum file size: 5MB
- Automatic file naming with timestamps

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based auth
- **CORS Protection**: Configurable origin restrictions
- **Input Validation**: Request data validation
- **File Type Validation**: Only image files allowed
- **File Size Limits**: Configurable upload limits

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/children4worldchildren_db |
| `JWT_SECRET` | JWT signing secret | (required) |
| `UPLOAD_PATH` | File upload directory | ./uploads |
| `MAX_FILE_SIZE` | Maximum file size in bytes | 5242880 (5MB) |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |

## Default Admin Credentials

After running `npm run init-db`:
- **Username**: `admin`
- **Password**: `admin123`
- **Email**: `admin@children4worldchildren.com`

**Important**: Change these credentials in production!

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a strong `JWT_SECRET`
3. Configure MongoDB Atlas or production database
4. Set up proper CORS origins
5. Use environment variables for all sensitive data
6. Set up SSL/TLS certificates
7. Configure proper file upload limits
8. Set up monitoring and logging

## Error Handling

The API includes comprehensive error handling:
- Validation errors with detailed messages
- Authentication and authorization errors
- File upload errors
- Database connection errors
- Generic error responses for production

## API Response Format

### Success Response
```json
{
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "error": "Error message",
  "message": "Detailed error information (development only)"
}
``` 