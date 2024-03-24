package com.mancity.user.user.domain;

import com.mancity.user.club.domain.Club;
import com.mancity.user.user.application.dto.request.UpdateRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.util.ObjectUtils;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "club_id")
    private Club club;

    private String nickName;

    private String email;

    private String password;

    private String salt;

    private int height;

    private int weight;

    private int foot;

    private boolean isPlayer;

    private String fcmToken;

    public void updateFcmToken(String token) {
        this.fcmToken = token;
    }

    public void update(UpdateRequestDto dto) {
        if (isValid(dto.getNickName())) {
            this.nickName = dto.getNickName();
        }

        if (isValid(dto.getFoot())) {
            this.foot = dto.getFoot();
        }

        if (isValid(dto.getHeight())) {
            this.height = dto.getHeight();
        }

        if (isValid(dto.getWeight())) {
            this.weight = dto.getWeight();
        }

        if (isValid(dto.getIsPlayer())) {
            this.isPlayer = dto.getIsPlayer();
        }
    }

    private boolean isValid(Object obj) {
        return obj != null && !ObjectUtils.isEmpty(obj);
    }

}
