import React from "react";
import { UserCardProps } from "@/shared/models/userCardProps";
import "./userCard.css";
import Image from "next/image";
import github from '@/app/assets/github.png'
import telegram from '@/app/assets/telegram.png'
import codepen from '@/app/assets/codepen.png'

const UserCard: React.FC<UserCardProps> = ({ name, nickname, role, extra }) => {
    return (
        <div className="user-card">
            <h2 className="user-card__name">{name}</h2>
            <div className="user-card__nickname-wrapper">
                <span className="user-card__aka">a.k.a</span>
                <p className="user-card__nickname">{nickname}</p>
            </div>
            <p className="user-card__role">{role}</p>
            <p className="user-card__extra">{extra}</p>
            <div className="user-card__divider" />
            <div className="user-card__socials">
                <a href="https://github.com" className="user-card__socials-link">
                    <Image
                        src={github}
                        alt="GitHub"
                        width={30}
                        height={30}
                        className="user-card__socials-icon"
                    />
                </a>
                <a href="https://t.me" className="user-card__socials-link">
                    <Image
                        src={telegram}
                        alt="Telegram"
                        width={30}
                        height={30}
                        className="user-card__socials-icon"
                    />
                </a>
                <a href="https://codepen.io" className="user-card__socials-link">
                    <Image
                        src={codepen}
                        alt="CodePen"
                        width={30}
                        height={30}
                        className="user-card__socials-icon"
                    />
                </a>
            </div>
        </div>
    );
};

export default UserCard;
