import React, { type JSX } from "react";
import type { Van } from "../../../types/types";

interface VanDetailsCardProps {
    van: Van;
}
type TabType = "details" | "pricing" | "photos";

export default function VanDetailsCard({ van }: VanDetailsCardProps): JSX.Element {


    const [activeTab, setActiveTab] = React.useState<TabType>("details");
    const { imageUrl, name, type, price, description } = van;

    return (
        <div className="van-details-card">
            <div className="van-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="van-details-content">
                <div className="category-tag">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
                <h2 className="van-name">{name}</h2>
                <p className="van-price">${price}/day</p>
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === "details" ? "active" : ""}`}
                        onClick={() => setActiveTab("details")}
                    >
                        Details
                    </button>
                    <button
                        className={`tab ${activeTab === "pricing" ? "active" : ""}`}
                        onClick={() => setActiveTab("pricing")}
                    >
                        Pricing
                    </button>
                    <button
                        className={`tab ${activeTab === "photos" ? "active" : ""}`}
                        onClick={() => setActiveTab("photos")}
                    >
                        Photos
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === "details" && (
                        <div className="details-content">
                            <div className="detail-row">
                                <strong>Name:</strong>
                                <span>{name}</span>
                            </div>
                            <div className="detail-row">
                                <strong>Category:</strong>
                                <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                            </div>
                            <div className="detail-row">
                                <strong>Description:</strong>
                                <span>{description}</span>
                            </div>
                            <div className="detail-row">
                                <strong>Visibility:</strong>
                                <span>Public</span>
                            </div>
                        </div>
                    )}
                    {activeTab === "pricing" && (
                        <div className="pricing-content">
                            <div className="detail-row">
                                <strong>Price:</strong>
                                <span>${price}/day</span>
                            </div>
                        </div>
                    )}
                    {activeTab === "photos" && (
                        <div className="photos-content">
                            <img src={imageUrl} alt={name} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 