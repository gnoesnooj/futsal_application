package com.mancity.social.game.application.dto.response;

import com.mancity.social.game.domain.Game;
import com.mancity.social.game.domain.GameLevel;
import com.mancity.social.highlight.application.dto.response.HighlightResponseDto;
import com.mancity.social.participant.application.dto.respose.ParticipantResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameResponseDto {

    private long gameId;

    private String replayUrl;

    private String boxImageUrl;

    private List<HighlightResponseDto> highlights;

    private int gender;

    private Long manager;

    private LocalDate startDate; // 경기일

    private int time; // 경기 시간대, 0~24

    private boolean isOver;

    private int playerNumber;

    private boolean isCalcOver;

    private TeamResponseDto teamA;

    private TeamResponseDto teamB;

    private List<PlayerResonseDto> playersA;

    private List<PlayerResonseDto> playersB;

    private List<ParticipantResponseDto> participants;

    private String level;

    private Long courtId;

    public static GameResponseDto from(Game game) {
        return GameResponseDto.builder()
                .gameId(game.getId())
                .replayUrl(game.getReplayUrl())
                .boxImageUrl(game.getBoxImageUrl())
                .highlights(game.getHighlights()
                        .stream()
                        .map(h-> HighlightResponseDto.from(h, game.getCourtId()))
                        .toList())
                .gender(game.getGender())
                .manager(game.getManager())
                .startDate(game.getStartDate())
                .time(game.getTime())
                .isOver(game.isOver())
                .isCalcOver(game.isCalcOver())
                .teamA(TeamResponseDto.fromTeamA(game))
                .teamB(TeamResponseDto.fromTeamB(game))
                .playersA(PlayerResonseDto.fromPlayersA(game))
                .playersB(PlayerResonseDto.fromPlayersB(game))
                .playerNumber(game.getPlayerNumber())
                .participants(game.getParticipants()
                        .stream()
                        .map(ParticipantResponseDto::from)
                        .toList())
                .level(game.getLevel().getGameLevel())
                .courtId(game.getCourtId())
                .build();
    }
}
