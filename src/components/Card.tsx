import React from 'react';
import type { CardProps } from '../types';
import '../styles/components.scss';

export const Card: React.FC<CardProps> = ({
  id,
  title,
  category,
  description,
  icon,
  color = 'from-blue-500 to-blue-600',
  onClick,
  onDelete,
  variant = 'default',
  showDescription = true
}) => {
  const variantClass = variant === 'featured' ? 'featured' : variant === 'compact' ? 'compact' : '';

  return (
    <div
      className={`card ${variantClass}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="card-header">
        <div className="card-icon-section">
          {icon && <span className="card-icon">{icon}</span>}
          <span className="category-badge">{category}</span>
        </div>

        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="card-delete-btn"
            aria-label="Delete"
          >
            ✕
          </button>
        )}
      </div>

      <h3 className="card-title">{title}</h3>

      {showDescription && description && (
        <p className="card-description">{description}</p>
      )}

      <div className={`gradient-bar bg-gradient-to-r ${color}`} />
    </div>
  );
};
