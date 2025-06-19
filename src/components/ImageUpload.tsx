import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import apiService from '../services/api';

interface ImageUploadProps {
  imageType?: string;
  imageKey?: string;
  label?: string;
  description?: string;
  category?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  imageType = 'general',
  imageKey,
  label,
  description,
  category
}) => {
  const { isAuthenticated } = useAuth();
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate default values based on imageType
  const defaultImageKey = imageKey || `${imageType}_image`;
  const defaultLabel = label || `${imageType.charAt(0).toUpperCase() + imageType.slice(1)} Image`;
  const defaultDescription = description || `Upload a new ${imageType} image`;
  const defaultCategory = category || imageType;

  // Load current image on component mount
  useEffect(() => {
    loadCurrentImage();
  }, [defaultImageKey]);

  const loadCurrentImage = async () => {
    if (!isAuthenticated) return;
    
    try {
      setIsLoading(true);
      setError(null);
      const response = await apiService.getImageUrl(defaultImageKey);
      setCurrentImageUrl(response.url);
      setPreview(response.url);
    } catch (error) {
      console.log(`No image found for key: ${defaultImageKey}`);
      setCurrentImageUrl(null);
      setPreview(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    if (!isAuthenticated) {
      setError('You must be logged in to upload images');
      return;
    }

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError(`Image is too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Please use an image smaller than 5MB.`);
      return;
    }

    try {
      setIsUploading(true);
      setError(null);

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to server
      await apiService.uploadImage(defaultImageKey, defaultCategory, file, defaultDescription);
      
      // Reload the image to get the new URL
      await loadCurrentImage();
    } catch (error) {
      console.error('Upload failed:', error);
      setError(error instanceof Error ? error.message : 'Upload failed. Please try again.');
      setPreview(currentImageUrl);
    } finally {
      setIsUploading(false);
    }
  };

  const onButtonClick = () => {
    if (!isAuthenticated) {
      setError('You must be logged in to upload images');
      return;
    }
    inputRef.current?.click();
  };

  const removeImage = async () => {
    if (!isAuthenticated) {
      setError('You must be logged in to remove images');
      return;
    }

    try {
      setIsUploading(true);
      setError(null);
      await apiService.deleteImage(defaultImageKey);
      setPreview(null);
      setCurrentImageUrl(null);
    } catch (error) {
      console.error('Delete failed:', error);
      setError(error instanceof Error ? error.message : 'Delete failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="mb-3">
        <h4 className="font-medium text-gray-900">{defaultLabel}</h4>
        <p className="text-sm text-gray-600">{defaultDescription}</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
      
      {isLoading ? (
        <div className="flex items-center justify-center h-32 bg-gray-50 rounded-lg">
          <Loader2 className="h-6 w-6 text-gray-400 animate-spin" />
        </div>
      ) : preview ? (
        <div className="relative group">
          <img
            src={preview}
            alt={defaultLabel}
            className="w-full h-32 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
            <div className="flex space-x-2">
              <button
                onClick={onButtonClick}
                disabled={isUploading}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                title="Change image"
              >
                {isUploading ? (
                  <Loader2 className="h-4 w-4 text-gray-700 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4 text-gray-700" />
                )}
              </button>
              <button
                onClick={removeImage}
                disabled={isUploading}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
                title="Remove image"
              >
                {isUploading ? (
                  <Loader2 className="h-4 w-4 text-gray-700 animate-spin" />
                ) : (
                  <X className="h-4 w-4 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            dragActive
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-300 hover:border-emerald-400 hover:bg-emerald-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
        >
          <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 mb-1">Click to upload</p>
          <p className="text-xs text-gray-500">Drag and drop or click to browse</p>
        </div>
      )}

      {error && (
        <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1">
          {error}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;